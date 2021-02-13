#ifdef GL_ES
  precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() { // sin (length) -> circles [the same distance around the center]
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  coord -= vec2(0.5, 0.5);

  float angle = atan(-coord.y, coord.x) * 0.1; 
  float len = length(coord);

  color.r += sin(len * 40. + angle * 40. + u_time);
  color.g += cos(len * 30. + angle * 60. - u_time);
  color.b += sin(len * 50. + angle * 50. + 3.0);

  gl_FragColor = vec4(color, 1.0);
}