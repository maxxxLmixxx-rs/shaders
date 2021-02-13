// #ifdef GL_ES
//     precision mediump float;
// #endif

// uniform vec2 u_resolution;

// float rectShape(vec2 position, vec2 scale) {
//     scale = vec2(0.5) - scale * 0.5;
//     vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
//     shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
//     return shaper.x * shaper.y;
// }

// void main(){
//     vec2 position = gl_FragCoord.xy / u_resolution;
    
//     vec3 color = vec3(1.0);
//     float rectangle = rectShape(position, vec2(0.5, 0.5));
//     color = vec3(rectangle);

//     gl_FragColor = vec4(color, 1.0);
// }

// ****************************************************************

#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 rectangle(vec2 position, vec2 scale) {
    scale = vec2(0.5) - scale * 0.5;                                                     // centerize
    vec2 ld = vec2( step(scale.x, position.x), step(scale.y, position.y) );              // x     > 0.1
    vec2 tr = vec2( step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y) );  // 1 - x > 0.1 
    vec2 shaper = ld * tr;                                                               // interchangable
    return vec3(shaper.x * shaper.y);
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color    = rectangle(position, vec2(0.25));
    gl_FragColor  = vec4(color, 1.0);
}
