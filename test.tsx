interface HomeInterface {
  size: string;
  address: string;
  phoneNumber: string;
}

type DraftHomeType = Partial<HomeInterface>;
type HomeTypeRequired = Required<HomeInterface>;
interface homeAddress extends Pick<HomeInterface, "address"> {
  id: number;
}
type homeAddress2 = Omit<homeAddress, "id">
type T0 = Extract<"a" | "b" | "c", "a" | "c">;
