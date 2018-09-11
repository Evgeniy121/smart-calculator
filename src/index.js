class SmartCalculator {
  constructor(initialValue) {
    this.value = [initialValue];
    this.op = ['pow','*','/','-','+'];
  }

  add(number) {
    this.value.push('+');
    this.value.push(number);
    return this;
  }

  subtract(number) {
    this.value.push('-');
    this.value.push(number);
    return this;
  }

  multiply(number) {
    this.value.push('*');
    this.value.push(number);
    return this;
  }

  devide(number) {
    this.value.push('/');
    this.value.push(number);
    return this;
  }

  pow(number) {
    this.value.push('pow');
    this.value.push(number);
    return this;
  }

  toString(){
    for(var i=0; i<this.op.length; i++)
    {
      var zn = this.op[i];
      for(var j=0; j<this.value.length; j++)
      {

        if(this.value[j]==zn)
        {
        if(this.value[j]=='pow')
         {var ii=j;
           //for (var k=this.op.length-1;k>=0;k--){
            // if (this.value[k]=='pow'){
          //this.value[k] = Math.pow(this.value[k-1],this.value[k+1]);
         // this.value.splice(k+1, 1);
         // this.value.splice(k-1, 1);
         // j = 0;k=this.op.length-1;
        for (var k=j;k<this.value.length;k++){
          if(this.value[k]=='pow') ii=k;
        }
        this.value[ii] = Math.pow(this.value[ii-1],this.value[ii+1]);
          this.value.splice(ii+1, 1);
         this.value.splice(ii-1, 1);
         j = 0;
        }//}}
        if(this.value[j]=='*')
        {
          this.value[j] = this.value[j+1]*this.value[j-1];
          this.value.splice(j+1, 1);
          this.value.splice(j- 1, 1);
          j = 0;
        }
        if(this.value[j]=='/')
        {
          this.value[j] = this.value[j-1]/this.value[j+1];
          this.value.splice(j+ 1, 1);
          this.value.splice(j-1, 1);
          j = 0;
        }

        if(this.value[j]=='-')
        {
          this.value[j] = this.value[j-1]-this.value[j+1];
          this.value.splice(j+1, 1);
          this.value.splice(j-1, 1);
          j = 0;
        }
        if(this.value[j]=='+')
        {
          this.value[j] = this.value[j+1]+this.value[j-1];
          this.value.splice(j+1, 1);
          this.value.splice(j-1, 1);
          j = 0;
        }
        else{
          continue;
        }

        j=0;
        }
      }
    }

    return this.value[0];
  }
}

module.exports = SmartCalculator;
