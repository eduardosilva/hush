import { Application } from 'express';
import { DataSource } from 'typeorm';

export class BootstrapSettings {
    public Express: Application;
    DataSource: DataSource;
}
