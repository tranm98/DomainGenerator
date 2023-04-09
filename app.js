let domainName = [];
let pro = ['the', 'our', 'my', 'we'];
let adj = ['super', 'great', 'cool', 'charming', 'giant'];
let noun = ['cat', 'tech', 'blanket', 'dog', 'computing' ];
let ext = ['.com', '.org', '.net', '.us'];

for (let i = 0; i < pro.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            for(let l = 0; l < ext.length; l++){
                domainName.push(" " + pro[i] + adj[j] + noun[k] + ext[l]);
            }
        }
    }
console.log(domainName);
};