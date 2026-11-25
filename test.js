const test=require('node:test'),assert=require('node:assert/strict'),core=require('./core');
test('pretty and compact output',()=>{const r=core.transform('{"a":[1,true]}');assert.equal(r.compact,'{"a":[1,true]}');assert.deepEqual(JSON.parse(r.formatted),r.value);});
test('reject invalid JSON',()=>assert.throws(()=>core.transform('{bad}'),SyntaxError));
test('flatten nested keys and arrays',()=>{const rows=core.flatten({'a.b':[null,2]});assert.deepEqual(rows.map(r=>r.path),['$','$["a.b"]','$["a.b"][0]','$["a.b"][1]']);assert.equal(rows[2].kind,'null');});
test('case insensitive query',()=>assert.equal(core.search(core.flatten({name:'ALPHA'}),'alpha').length,1));
