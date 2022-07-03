var items = [];

class test {
    
    add(val) {
        items.push(val);
        // items.sort();   // sort the array descending
        //
        //[10,5] ... insert 11 --> [11,10,5]
        //[10,5] ... insert 8 --> [10,8,5]
        //[10,5] ... insert 4 --> [10,5,4]
        //[10,8,6,4] ... insert 7 --> [10,8,7,6,4]
        //[10,8,6,4] ... insert 6 --> [10,8,6,6,4]

        // let latestIdx = 0;
        // for(let i=0; i<items.length; i++) {
        //     if(items[i] <= val) {
        //         break;
        //     }
        //     latestIdx = i;
        // }


        // [10,8,7,6,5] ... insert 4 
        // [10,9,6] ... insert 6
        // [10,8,7,6,5] ... push 7 --> [10,8,7,6,5,7] 
        let first = 0;      //0
        let last = items.length - 1;  //4
        let mid=0;  // 2 

        while(first<=last) {
            mid = (first + last)/2; // 3 (6)    // 4

            if(items[mid] == val) {
                return mid;
            }
            if(items[mid] > val) {
                first = mid + 1;    // 3 (6)    // 5
            }
            if(items[mid] < val) {  
                last = mid - 1;
            }
        }

        return mid;

    }

    getKth(kth) {

        return items[kth--];
    }
}