const JSONForge=(()=>{
  function transform(source, spaces=2){const value=JSON.parse(source);return {value,formatted:JSON.stringify(value,null,spaces),compact:JSON.stringify(value)};}
  function flatten(value){const result=[];const stack=[{path:'$',value,depth:0}];while(stack.length){const item=stack.pop();const v=item.value;const kind=v===null?'null':Array.isArray(v)?'array':typeof v;const children=v!==null&&typeof v==='object'?Object.entries(v):[];result.push({path:item.path,depth:item.depth,kind,preview:kind==='array'?`[${children.length} items]`:kind==='object'?`{${children.length} keys}`:JSON.stringify(v)});for(let i=children.length-1;i>=0;i--){const [k,x]=children[i];stack.push({path:item.path+'['+(Array.isArray(v)?k:JSON.stringify(k))+']',value:x,depth:item.depth+1});}}return result;}
  function search(rows,query){const q=query.trim().toLowerCase();return rows.filter(r=>!q||`${r.path} ${r.kind} ${r.preview}`.toLowerCase().includes(q));}
  return {transform,flatten,search};
})();
if(typeof module!=='undefined') module.exports=JSONForge;
