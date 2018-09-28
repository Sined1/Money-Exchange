module.exports = function makeExchange(currency) {
    let h, q, d, n, p, i;
    let s = currency;
    let ans = {};

    //border values
    if (s <= 0) return {};
    if (s > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    i = Math.trunc(s / 50);
    if (i != 0) {
      h = i;
      s = s % 50;
    }

    i = Math.trunc(s / 25);
    if (i != 0) {
      q = i;
      s = s % 25;
    }

    i = Math.trunc(s / 10);
    if (i != 0) {
      d = i;
      s = s % 10;
    }

    i = Math.trunc(s / 5);
    if (i != 0) {
      n = i;
      s = s % 5;
    }

    p = s;

    if (h != 0 && typeof h !== "undefined") {
      ans.H = h;
    }

    if (q != 0 && typeof q !== "undefined") {
      ans.Q = q;
    }

    if (d != 0 && typeof d !== "undefined") {
      ans.D = d;
    }

    if (n != 0 && typeof n !== "undefined") {
      ans.N = n;
    }

    if (p != 0 && typeof p !== "undefined") {
      ans.P = p;
    }
    return ans;
}
