package tr.sma.flug;

import java.util.ArrayList;

public class Flugzeug {

    private String farbe;
    private int geschwindigkeit;
    private int sitzplätze;
    private int falschirme;
    private int Beschleunigung;
    private int Räder;
    ArrayList<Motor> motorListe = new ArrayList<Motor>();

    public Flugzeug(String farbe, int geschwindigkeit) {
        this.farbe = farbe;
        this.geschwindigkeit = geschwindigkeit;
        Motor Motor;
        this.motorListe.add(Motor);
    }

    public Flugzeug(int gewicht, int platz, Landebahn landebahn) {
    }

    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }

    public int getGeschwindigkeit() {
        return geschwindigkeit;
    }

    public void setGeschwindigkeit(int geschwindigkeit) {
        this.geschwindigkeit = geschwindigkeit;
    }

    public int getSitzplätze() {
        return sitzplätze;
    }

    public void setSitzplätze(int sitzplätze) {
        this.sitzplätze = sitzplätze;
    }

    public int getFalschirme() {
        return falschirme;
    }

    public void setFalschirme(int falschirme) {
        this.falschirme = falschirme;
    }

    public int getBeschleunigung() {
        return Beschleunigung;
    }

    public void setBeschleunigung(int beschleunigung) {
        Beschleunigung = beschleunigung;
    }

    public int getRäder() {
        return Räder;
    }

    public void setRäder(int räder) {
        Räder = räder;
    }

    public ArrayList<Motor> getMotorListe() {
        return motorListe;
    }

    public void setMotorListe(ArrayList<Motor> motorListe) {
        this.motorListe = motorListe;
    }

    public void setMotorList(Motor motor) {
        this.motorListe.add(motor);
    }
    public int getLeistung(){
        int leistung = 0;
        /*for (Motor m: motorListe){
        }
        */
        for (int i=0; i<motorListe.size(;i++)){
            leistung += motorListe.get(i).getLeistung();
        }
    }
}
