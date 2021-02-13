#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float noise1D(float value) {
    return cos(value + cos(value * 90.) * 100.) * 0.5 + 0.5;
}

void main(){
    vec3 color = vec3(0.0);
    
    color.r += noise1D(u_time / 10.);
    color.g += noise1D(u_time / 2.);
    color.b += noise1D(u_time / 20.);

    gl_FragColor = vec4(color, 1.0);
}