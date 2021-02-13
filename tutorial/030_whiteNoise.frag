#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random2D(vec2 coord) {
    return fract(sin( dot(coord.xy, vec2(12.9898, 78.233)) ) * 43758.5453);
}

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float grain = random2D( vec2(sin(coord) / 999999.9) * u_time);
    vec3 color = vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}