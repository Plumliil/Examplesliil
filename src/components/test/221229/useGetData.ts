function useMethod() {
  interface Animal {
    eat: boolean;
  }
  interface Bird extends Animal {
    fly: boolean;
  }
  interface Fish extends Animal {
    swim: boolean;
  }

  let bird = <Bird>{};
  bird.eat = true;
  bird.fly = true;
  // bird.swim --> error: Property 'swim' does not exist on type 'Bird'
}
useMethod();
export default useMethod;
