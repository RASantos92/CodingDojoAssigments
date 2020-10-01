package Master;

public class HumansTest {
	public static void main(String[] args) {
		Humans person1 = new Humans("Daniel Larusso");
		Humans person2 = new Humans("Johnny Lawrence");
		person1.toString();
		person1.attack(person2);
		person2.toString();
	}

}
