precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

float rectangle(vec2 pos, vec4 rect) {
  vec2 tr = step(rect.xy, 1.0 - pos.yx);
  vec2 bl = step(rect.zw, pos.yx);
  return tr.x * tr.y * bl.x * bl.y;
}

float circle(in vec2 pos, in vec2 circ, in float r) {
  float dist = distance(pos, circ);
  return step(dist, r);
}

void main() {
  vec2 st = gl_FragCoord.xy / resolution;
  float circle = circle(st + sin(st.x * 3.0 + time * 2.0) * (sin(time) * 0.5), vec2(0.5), 0.2);
  vec3 color = vec3(0.0, 0.0, 0.0);
  color += vec3(st.x, 1.0, 1.0) * circle;
  gl_FragColor = vec4(color, 1.0);
}
