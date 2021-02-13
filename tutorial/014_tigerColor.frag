#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float minmax(float min, float max, float value) {
    return min(max, max(min, value));
}

void main() {
    vec2 coord = 6. * gl_FragCoord.xy / u_resolution;
    
    // for (float i = 1.; i < 8.; i++) {
    for (int n = 1; n < 5; n++) {
        float i = float(n);
        coord += vec2(
            0.7 / i * sin(i * coord.y + u_time + 0.3 * i) + 0.8, 
            0.4 / i * sin(    coord.x + u_time + 0.3 * i) + 1.6
        );
    }

    // coord += vec2(
    //     0.7 / sin(coord.y + u_time + 0.3) + 0.8, 
    //     0.4 / sin(coord.x + u_time + 0.3) + 1.6
    // );

    // vec3 color = vec3(
    //     0.5 * sin(coord.x) + 0.5, 
    //     0.5 * sin(coord.y) + 0.5,
    //     sin(coord.x + coord.y)
    // );

    vec3 color = vec3(
        1.0, 0.9, 0
    );

    // gl_FragColor = vec4(color, 1.0);
    gl_FragColor = vec4(color, minmax(0.25, 0.75, sin(coord.x * coord.y)));
}