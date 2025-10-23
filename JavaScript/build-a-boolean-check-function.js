

booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");


function booWho(goat) {
  if (goat === true || goat === false) {
    return(true);
    } else {
    return(false);
    }
  }
  

