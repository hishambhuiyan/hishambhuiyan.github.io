*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#050816;
    color:#fff;
    overflow-x:hidden;
}

/* Aurora */

.aurora{
    position:fixed;
    inset:0;
    background:
    radial-gradient(circle at 20% 20%,#3b82f660 0%,transparent 30%),
    radial-gradient(circle at 80% 30%,#06b6d460 0%,transparent 35%),
    radial-gradient(circle at 50% 90%,#8b5cf660 0%,transparent 40%);
    filter:blur(100px);
    z-index:-2;
    animation:aurora 12s infinite alternate;
}

@keyframes aurora{

    from{
        transform:translateY(-30px) scale(1);
    }

    to{
        transform:translateY(30px) scale(1.2);
    }

}

nav{

    width:100%;
    height:80px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 80px;

    position:fixed;

    top:0;

    left:0;

    backdrop-filter:blur(18px);

    background:rgba(255,255,255,.05);

    border-bottom:1px solid rgba(255,255,255,.1);

    z-index:999;

}

.logo{

    font-size:30px;

    font-weight:700;

}

.logo span{

    color:#38bdf8;

}

nav ul{

    display:flex;

    list-style:none;

    gap:40px;

}

nav a{

    color:white;

    text-decoration:none;

    transition:.3s;

}

nav a:hover{

    color:#38bdf8;

}

.hero{

    min-height:100vh;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:120px 8%;

    gap:80px;

}

.hero-left{

    flex:1;

}

.welcome{

    color:#38bdf8;

    font-size:20px;

    margin-bottom:15px;

}

.hero h1{

    font-size:70px;

    line-height:1.1;

}

.hero h1 span{

    color:#38bdf8;

}

.hero h2{

    font-size:34px;

    margin:20px 0;

    color:#dbeafe;

}

.desc{

    color:#cbd5e1;

    max-width:600px;

    line-height:1.8;

}

.buttons{

    display:flex;

    gap:20px;

    margin-top:40px;

}

.btn{

    background:#38bdf8;

    color:#000;

    padding:15px 35px;

    border-radius:50px;

    text-decoration:none;

    font-weight:600;

    transition:.4s;

}

.btn:hover{

    transform:translateY(-5px);

    box-shadow:0 0 30px #38bdf8;

}

.outline{

    background:transparent;

    color:white;

    border:2px solid #38bdf8;

}

.hero-right{

    flex:1;

    display:flex;

    justify-content:center;

}

.glass-card{

    width:380px;

    height:480px;

    border-radius:35px;

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.15);

    backdrop-filter:blur(20px);

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

    transition:.5s;

}

.glass-card:hover{

    transform:translateY(-12px) rotate(-2deg);

    box-shadow:0 20px 60px rgba(0,255,255,.3);

}

.glass-card img{

    width:100%;

    height:100%;

    object-fit:cover;

}

@media(max-width:900px){

nav{

padding:0 20px;

}

nav ul{

display:none;

}

.hero{

flex-direction:column-reverse;

text-align:center;

padding-top:120px;

}

.hero h1{

font-size:48px;

}

.hero h2{

font-size:24px;

}

.glass-card{

width:300px;

height:380px;

}

.buttons{

justify-content:center;

flex-wrap:wrap;

}

}
