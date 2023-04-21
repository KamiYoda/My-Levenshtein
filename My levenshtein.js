function my_levenshtein(s1,s2){
    var count =0;
    var s1_len = s1.length, s2_len = s2.length;
    if (s1 === s2){
        return 0
    }
    if (s1_len != s2_len){
        return -1
    }
    else{
            for(i=0; i<s1.length; i++){
    
                    if(s1.charAt(i) !== s2.charAt(i)){
                        count++;
                    } 
            }
            return count;
    }
}
