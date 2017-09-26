var removeDuplicates = function(nums) {
var a = nums.length;
for(let x = 0; x < nums.length - 1; x++)
{if (nums[x] === nums[x+1])
{
    
    nums.splice(x,1);
    x--;
}
}

};