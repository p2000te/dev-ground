const abstract = ()=>{
    throw new Error("Abstract method called!");
};

const api = {
    save(path,data,settings){ return Promise.resolve().then(()=>abstract()); },
    open(path,data,settings){ return Promise.resolve().then(()=>abstract()); }
}
