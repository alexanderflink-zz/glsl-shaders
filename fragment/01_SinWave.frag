precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.05, pct, st.y) -
          smoothstep( pct, pct+0.05, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy / resolution.xy;
  vec2 mouseNormalized = mouse.xy / resolution.xy;
  float y = step(mod(st.x, 0.2), st.y);
  vec3 color = vec3(0, 0, 0);
  color += vec3(y);
	gl_FragColor = vec4(color,1.0);
}
