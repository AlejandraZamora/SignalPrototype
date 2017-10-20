package com.example.filters;

import com.example.signals.Signal;

public interface Filter {
    public Signal filterSignal(Signal signal);
}
