precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

float rectangle(vec2 pos, vec4 rect) {
  vec2 tr = step(rect.xy, 1.0 - pos.yx);
  vec2 bl = step(rect.zw, pos.yx);
  return tr.x * tr.y * bl.x * bl.y;
}

void main() {
  vec2 st = gl_FragCoord.xy / resolution;
  float sin = abs(sin(time));
  float rect1 = rectangle(st, vec4(0.1 * sin, 0.1 * sin, 0.1 * sin, 0.1 * sin));
  float rect2 = rectangle(st, vec4(0.1 * sin, 0.2 * sin, 0.2 * sin, 0.2 * sin));
  float rect3 = rectangle(st, vec4(0.3 * sin, 0.0 * sin, 0.2 * sin, 0.15 * sin));
  vec3 color = vec3(0.0, 0.0, 0.0);
  color += vec3(0.1, 0.1, 0.15) * (rect1 + rect2 + rect3);
  gl_FragColor = vec4(color, 1.0);
}
