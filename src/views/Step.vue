<template>
  <el-container>
    <el-main>
      <canvas
        ref="canvas"
        width="720"
        height="1280"
        @mousedown="setStartPoint"
      ></canvas>
    </el-main>
    <el-aside>
      <div class="comments-list-wrap">
        <p class="list-title">Comments</p>
        <div class="comment" v-for="(comment, index) in comments" :key="index">
          <p class="comment-title">{{ `${comment.title} ${index + 1}` }}</p>
          <div class="comment-text">{{ comment.text }}</div>
        </div>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'Step',
  data: () => ({
    initX: 0,
    initY: 0,
    width: 0,
    height: 0,
    canvas: null,
    ctx: null,
    comments: []
  }),
  methods: {
    setStartPoint(event) {
      const { offsetX, offsetY } = event;
      this.initX = offsetX;
      this.initY = offsetY;

      this.canvas.addEventListener('mousemove', this.drawInMotion);
      this.canvas.addEventListener('mouseout', () => {
        this.canvas.removeEventListener('mousemove', this.drawInMotion);
      });

      this.canvas.addEventListener('mouseup', this.addComment);
    },
    addComment(event) {
      const { offsetX, offsetY } = event;

      this.width = offsetX - this.initX;
      this.height = offsetY - this.initY;

      this.canvas.removeEventListener('mousemove', this.drawInMotion);

      this.ctx.strokeRect(this.initX, this.initY, this.width, this.height);

      this.comments.push({
        title: 'Comment',
        text: `Width: ${this.width}, Height: ${this.height}`
      });
    },

    drawInMotion(event) {
      this.ctx.clearRect(
        this.initX,
        this.initY,
        event.offsetX - this.initX,
        event.offsetY - this.initY
      );

      this.ctx.strokeRect(
        this.initX,
        this.initY,
        event.offsetX - this.initX,
        event.offsetY - this.initY
      );
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = '#EF6C00';
  }
};
</script>

<style lang="scss" scoped>
canvas {
  background-image: url(../assets/road.jpg);
}

.el-aside {
  border-left: 2px solid #546e7a;
  margin-top: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  .comments-list-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    align-items: flex-start;
    margin-left: 20px;
    padding-top: 20px;

    .list-title {
      font-size: 22px;
      color: #546e7a;
      font-weight: 500;
    }

    .comment {
      margin: 10px;

      .comment-title {
        margin-bottom: 5px;
        font-weight: bold;
      }

      .comment-text {
        margin-left: 5px;
      }
    }
  }
}
</style>
