#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    color += sin(coord.x * 5. + cos(u_time * 2. + coord.y * 50. + sin(coord.x * 50. + u_time))) * 2.;
    color += cos(coord.y * 5. + sin(u_time * 5. + coord.x * 50. + cos(coord.y * 50. + u_time))) * 2.;

    gl_FragColor = vec4(color, color, color * 1.2, 1.0);
}
