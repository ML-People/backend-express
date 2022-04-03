let s_prim = 'test'; 
let s_obj = new String(s_prim); 

export const getObj = (req, res) => { 
    res.json(s_obj); 
}; 