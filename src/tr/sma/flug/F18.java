package tr.sma.flug;

public class F18 extends Flugzeug {

    private int maxGeschwindigkeit;
    private int maxBeschleunigung;

    public F18(int beschleunigung, int geschwindigkeit, String farbe, int maxBeschleunigung, int maxGeschwindigkeit) {
        super(farbe, geschwindigkeit);
        this.maxBeschleunigung = beschleunigung;
        this.maxGeschwindigkeit = geschwindigkeit;
    }

    public int getMaxGeschwindigkeit() {
        return maxGeschwindigkeit;
    }

    public void setMaxGeschwindigkeit(int maxGeschwindigkeit) {
        this.maxGeschwindigkeit = maxGeschwindigkeit;
    }

    public int getMaxBeschleunigung() {
        return maxBeschleunigung;
    }

    public void setMaxBeschleunigung(int maxBeschleunigung) {
        this.maxBeschleunigung = maxBeschleunigung;
    }
}

