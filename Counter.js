let count = 0;
const value = document.querySelector("#value")
const btns = document.querySelector(".btn")

btns.forEach(function counter (btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.ClassList
        if (styles.contains("increase")){
            value++;
        }
        else if (styles.contains("decrease")){
            value--;
        }
        else {
            value = 0;
        }
        if (value>0){
            value.style.color = "green";
        }
        if (value<0){
            value.style.color = "red";
        }
        if (value==0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
        
});