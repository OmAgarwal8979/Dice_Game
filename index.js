function random_number()
{
  var random = Math.random();
  random = random*6;
  random = Math.floor(random) + 1;
  return random;
}
var random1 = random_number();
var random2 = random_number();
if (random1 == 1)
{
  if(random2 == 1)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(random2 == 3)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if (random1==2)
{
  if (random2 == 1)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (random2 == 3)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if (random1==3)
{
  if (random2 == 1)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (random2 == 3)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if (random1==4)
{
  if (random2 == 1)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (random2 == 3)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if (random1==5)
{
  if (random2 == 1)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (random2 == 3)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins! <span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span>";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if (random1==6)
{
  if (random2 == 1)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (random2 == 2)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (random2 == 3)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (random2 == 4)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (random2 == 5)
  {
    document.querySelector("h1").innerHTML = "<span><img class = 'flag' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/triangular-flag_1f6a9.png'</span> Player 1 wins! ";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if (random2 == 6)
  {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
