export function counterGroup() {
    let totalCount = 0;
    
    function newCounter() {
        let n = 0;
        return {
            count: () => { 
                totalCount++;
                return n++; 
            },
            reset: () => { n = 0; }
        };
    }
    
    function total() {
        return totalCount;
    }
    
    return { newCounter, total };
}
