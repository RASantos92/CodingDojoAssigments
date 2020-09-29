class Project {
    private String name;
    private String description;
    
    // overload constructor method 3 ways
    public Project() {
    }
    public Project(String name) {
            this.name = name;
        }
    public Project(String name, String description) {
            this.name = name;
            this.description = description;
        }

    //******************* getters *************
    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }

    //******************* setters *************
    public void setName(String name){
        this.name = name;
    }
    public void setDescription(String name){
        this.description = description;
    }

    // ******************* this is instance method *************
    public void elevatorPitch(Project project){
        System.out.println("Project Name: " + project.getName() + " Description: " + project.getDescription());
    }
    // will run including String declaring what project number is running
    public void elevatorPitch(String str, Project project){
        System.out.println(str + ": Project Name: " + project.getName() + " Description: " + project.getDescription());
    }
}