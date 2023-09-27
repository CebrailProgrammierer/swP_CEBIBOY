package tr.sma.flug;

public class Motor {
    private int leistung;
    private String name;
    private String erzeuger;
    private int gewicht;

    public Motor(int leistung, String name, String erzeuger, int gewicht) {
        this.leistung = leistung;
        this.name = name;
        this.erzeuger = erzeuger;
        this.gewicht = gewicht;
    }
}
