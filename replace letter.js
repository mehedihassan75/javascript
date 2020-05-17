function m(str,srch,newstr)
{
    let a=str.split("")
    for(i=0;i<a.length;i++)
    {
        if(a[i]==srch)
        {
            a[i]=newstr
        }
    }
    let b=a.join("")
    console.log(b)
}
m("Bangladesh Won The ICC Champion Trophy","C","Z")