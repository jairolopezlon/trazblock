import { NearBindgen, near, call, view } from 'near-sdk-js';

interface Minter{
  companyName:string,
  address:string,
  certificatesMinted:string[]
}
interface MinterMap {
  [address:string]: Minter
}

@NearBindgen({})
class Trazblock {
  greeting: string = "Hello";
  certificateMinters: {MinterMap} | {} = {} 

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.greeting;
  }

  @view({})
  get_certificateMinters(): MinterMap{
    return this.certificateMinters;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }: { message: string }): void {
    // Record a log permanently to the blockchain!
    near.log(`Saving greeting ${message}`);
    this.greeting = message;
  }
}