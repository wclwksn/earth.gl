precision highp float;

#pragma glslify: targetpos = require('./chunk/gl-targetpos.glsl')

uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_modelMatrix;

//物体位置
attribute vec3 a_position;

varying vec4 v_color;

void main() { 
    v_color = vec4(a_position,1.0);
    gl_Position = targetpos(u_projectionMatrix, u_viewMatrix, u_modelMatrix) *vec4(a_position, 1.0);
}