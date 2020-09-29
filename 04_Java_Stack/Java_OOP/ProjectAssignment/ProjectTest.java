class ProjectTest {
    public static void main(String[] args) {
        Project p = new Project ();

        Project project1 = new Project();

        Project project2 = new Project("Landscaping ,");
        // System.out.println("Project name: " + project2.getName());

        Project project3 = new Project("CheckCashing ,", "cash your checks now!");
        // System.out.println("Project name: " + project3.getName() + "Description: " + project3.getDescription());


        p.elevatorPitch("Project #3", project3);
    }
}
