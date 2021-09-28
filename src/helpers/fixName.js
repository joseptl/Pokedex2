const fixName = (name)=>{
    if(name.includes("-")){
        if(name.slice(name.indexOf("-")).length>3){
            if(name.slice(name.indexOf("-")).includes("koko")||name.slice(name.indexOf("-")).includes("lele")||name.slice(name.indexOf("-")).includes("fini")||name.slice(name.indexOf("-")).includes("bulu")){
                return name
            }else{
                return name.replace(name.slice(name.indexOf("-")),"")
            }
        }else{
            return name
        }
    }else{
        return name
    }
}

export default fixName