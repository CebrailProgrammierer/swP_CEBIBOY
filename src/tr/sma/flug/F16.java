package tr.sma.flug;

public class F16 extends Flugzeug {

    private int sitzplätze;
    private Motor motor;

    public F18(int sitzplätze, Motor motor, String farbe, int geschwindigkeit) {
        super(farbe, geschwindigkeit);
        this.sitzplätze = sitzplätze;
        this.motor = motor;
    }

    public int getSitzplätze() {
        return sitzplätze;
    }

    public void setSitzplätze(int sitzplätze) {
        this.sitzplätze = sitzplätze;
    }

    public Motor getMotor() {
        return motor;
    }

    public void setMotor(Motor motor) {
        this.motor = motor;
    }
}


