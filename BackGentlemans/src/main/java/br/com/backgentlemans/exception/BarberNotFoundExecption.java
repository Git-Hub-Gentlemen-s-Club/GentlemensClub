package br.com.backgentlemans.exception;

public class BarberNotFoundExecption extends RuntimeException {
    public BarberNotFoundExecption(String message) {
        super(message);
    }
}
