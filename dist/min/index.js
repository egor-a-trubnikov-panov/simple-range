function Range(e,n){function t(e,n,t){e[y]?e[y](n,t,a):e[w]?e[w]("on"+n,t):e["on"+n]=t}function o(e){if(e=e||window.event,p=z?e.pageY:e.pageX,p||(p=z?e.clientY+T[E]+X[E]:e.clientX+T[L]+X[L]),k&&p>=u&&u+r>=p)if(l=Math.round((p-u)/r*100),Array.isArray(v))for(g=0;m>g;g++)l===v[g]&&f();else l%v||f()}function f(){b.style[N]=l/100*r-c/2+"px",n.drag(l)}function i(){s=b[H],l=n.value/100*Y[H],b.style[N]=l-s/2+"px",n.drag(n.value)}var a=!1,d={value:0,vertical:a,drag:function(){},step:20};for(g in d)"undefined"==typeof n[g]&&(n[g]=d[g]);var r,u,c,l,s,p,g=0,v=n.step,m=v.length,y="addEventListener",w="attachEvent",R="mouse",h="createElement",x="appendChild",_="className",E="scrollTop",L="scrollLeft",A=document,T=A.body,X=A.documentElement,Y=A[h]("div"),b=A[h]("span"),k=a,z=n.vertical,C=z?"Range_vertical":"Range",H=z?"offsetHeight":"offsetWidth",M=z?"offsetTop":"offsetLeft",N=z?"top":"left";e[_]=C,Y[_]=C+"__track",b[_]=C+"__drag",t(Y,R+"down",function(e){return r=Y[H],u=Y[M],c=b[H],k=!0,o(e),a}),t(A,R+"move",function(e){o(e)}),t(A,R+"up",function(){k=a}),t(window,"resize",function(){s=b[H],b.style[N]=l/100*Y[H]-s/2+"px",k=a}),Y[x](b),e[x](Y),i()}"undefined"!=typeof module&&module.exports?module.exports=Range:"function"==typeof define&&define.amd?define(function(){return Range}):window.Range=Range;