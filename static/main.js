import Context from './es6/context.js';

const es6 = window.es6 = Object.create(null);
const globalExport = (binding, NS) => {
    let target = es6;
    let key =  null;
    if( typeof NS === 'string' ){
        target=(target[NS]=target[NS]||Object.create(null));
    }
    if( typeof binding === 'function' ){
        target[binding.name]=binding;
    } else {
        Object.assign(target,binding);
    }
};

globalExport(Context);
