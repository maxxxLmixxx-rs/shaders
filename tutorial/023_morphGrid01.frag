#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random2D(vec2 coord) {
    return fract(sin( dot(coord.xy, vec2(12.9898, 78.233)) ) * 43758.5453);
}

void main() {
    vec2 coord = gl_FragCoord.xy * 0.06;

    float rand01 = fract(random2D(floor(coord)) + u_time / 60.);
    float rand02 = fract(random2D(floor(coord)) + u_time / 40.);
    float rand03 = fract(random2D(floor(coord)) + u_time / 20.);

    gl_FragColor = vec4(rand01, rand02, rand03, 1.0);
}