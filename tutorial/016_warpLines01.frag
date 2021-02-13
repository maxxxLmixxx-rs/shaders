#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() { // sin(x + cos(time)) -> oscillate sin(x)
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    color += sin(coord.x * 50. + cos(u_time * 2. + coord.y * 5.)) * 2.;
    
    gl_FragColor = vec4(color, color, color, 1.0);
}