<template>
  <div class="view-block"
       :style="getStyle()"
       ref="block">
    {{block.name}}
    <div class="move"></div>
    <div class="res-t"></div>
    <div class="res-tr"></div>
    <div class="res-r"></div>
    <div class="res-br"></div>
    <div class="res-b"></div>
    <div class="res-bl"></div>
    <div class="res-l"></div>
    <div class="res-tl"></div>
    <div class="btn-group">
      <div class="btn">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageView',
  props: {
    block: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.drag();
  },
  methods: {
    getStyle () {
      let style = this.block.style;
      return {
        "left": style.l + "px",
        "top": style.t + "px",
        "width": style.w + "px",
        "height": style.h + "px",
        "zIndex": style.z
      }
    },
    drag () {
      let self = this;
      self.$refs.block.onmousedown = function (e) {
        let style = self.block.style,
          type = e.target.className;
        let w = style.w,
          h = style.h,
          l = style.l,
          t = style.t,
          z = style.z;
        let x1 = e.pageX, y1 = e.pageY;
        document.onmousemove = function (e) {
          let x2 = e.pageX, y2 = e.pageY;
          let dX = x1 - x2,
            dY = y1 - y2;
          let move = () => {
            style.l = l - dX;
            style.t = t - dY;
          }, res = {
            resTop () {
              style.t = t - dY;
              style.h = h + dY;
            },
            resRight () {
              style.w = w - dX;
            },
            resBottom () {
              style.h = h - dY;
            },
            resLeft () {
              style.l = l - dX;
              style.w = w + dX;
            }
          }
          switch (type) {
            case 'move':
              move();
              break;
            case 'res-t':
              res.resTop();
              break;
            case 'res-tr':
              res.resTop();
              res.resRight();
              break;
            case 'res-r':
              res.resRight();
              break;
            case 'res-br':
              res.resBottom();
              res.resRight();
              break;
            case 'res-b':
              res.resBottom();
              break;
            case 'res-bl':
              res.resBottom();
              res.resLeft();
              break;
            case 'res-l':
              res.resLeft();
              break;
            case 'res-tl':
              res.resTop();
              res.resLeft();
          }
        }
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null;
          self.$bus.emit('changeStyle', self.index, self.block.style);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: rgb(0, 160, 255);

@mixin pos-ab($top, $right, $bottom, $left, $z-index: 1) {
  position: absolute;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
  z-index: $z-index;
}

.view-block {
  position: absolute;
  z-index: 1;

  &:hover {
    .move,
    [class^="res-"] {
      opacity: 0.6;
    }
  }

  &.active {
    z-index: 999999;

    .move,
    [class^="res-"] {
      opacity: 1;
    }

    .move {
      border-style: solid;
    }
  }

  [class^="res-"] {
    opacity: 0;
    overflow: visible;
  }

  .move {
    @include pos-ab(0, 0, 0, 0, 10);
    border: 1px dashed rgba(0, 160, 255, 0.5);
    opacity: 0;
  }

  [class^="res-"] {
    width: 8px;
    height: 8px;
    margin: -4px;
    background: $blue;
    @include pos-ab(0, auto, auto, 0, 12);

    &:active {
      opacity: 0.8;
    }
  }

  .res-t,
  .res-b {
    left: 50%;
    cursor: ns-resize;
  }

  .res-b {
    top: 100%;
  }

  .res-r,
  .res-l {
    top: 50%;
    cursor: ew-resize;
  }

  .res-r {
    left: 100%;
  }

  .res-tr {
    left: 100%;
    cursor: ne-resize;
  }

  .res-br {
    top: 100%;
    left: 100%;
    cursor: se-resize;
  }

  .res-bl {
    top: 100%;
    cursor: ne-resize;
  }

  .res-tl {
    cursor: se-resize;
  }
}
</style>