#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleShape(vec2 position, float radius) {
    return step(radius, length(position - vec2(0.5)));
} 

mat2 scale(vec2 scale) {
    return mat2(1./ scale.x, 0., 0., 1./ scale.y);
}

vec2 scaleVec2(vec2 scale) {
    return vec2(1./ scale.x, 1./ scale.y);
}

void main() { // VEC2 x MX_2x2 = MX_1x2 * MX_2x2 = MX_1x2
              // shrink all coordinates
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1., 0.55, 0.55);

    coord -= 0.5;
    // coord *= scale( vec2(1.5, 1.) );
    // coord *= scale( vec2(sin(u_time) + 2.5) );
    coord *= scaleVec2( vec2(1.5, 1.) );
    coord += 0.5;

    color += vec3( circleShape(coord, 0.3) );
    
    gl_FragColor = vec4(color, 1.0);
}