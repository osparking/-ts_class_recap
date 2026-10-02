function triple(arg: number | string) {
  if (typeof arg === 'number') {
    return arg * 3;
  }
  return arg.repeat(3);
}
