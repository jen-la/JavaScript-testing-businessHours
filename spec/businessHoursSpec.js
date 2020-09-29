// test suite for calendar.js
describe('Business Hours app', () => {

    // specs for businessHours function
    describe('#businessHours', () => {
        
        describe('if dayNumber or hourNumber is not a number', () => {
            it('should throw an error', () => {
                expect(() => businessHours('1', 10)).toThrow();
                expect(() => businessHours(1, '10')).toThrow();
            });
        });

        describe('if passed dayNumber outside of 0-6 inclusive OR hourNumber outside of 0-24 inclusive', () => {
            it('should throw an error', () => {
                expect(() => businessHours(7, 10)).toThrow();
                expect(() => businessHours(1, 25)).toThrow();
            });
        });

        describe('if passed dayNumber between 1-5 inclusive AND hourNumber between 9-18 inclusive', () => {
            it('should not throw an error', () => {
                expect(() => businessHours(1, 10)).not.toThrow();
            });
            
            it('should return true', () => {
                expect(businessHours(1, 9)).toBe(true);
            });
        });

        describe('if passed dayNumber is 0 or 6, OR hourNumber is between 0-8 or 19-24 inclusive', () => {    
            it('should not throw an error', () => {
                expect(() => businessHours(6, 20)).not.toThrow();
            });
            
            it('should return false', () => {
                expect(businessHours(0, 9)).toBe(false);
                expect(businessHours(1, 8)).toBe(false);
            });
        });

    });

    // specs for getDayNumber function
    describe('#getDayNumber', () => {
        describe('if janFirstDayNumber or yearDayNumber is not a number', () => {
            it('should throw an error', () => {
                expect(() => getDayNumber('1', 200)).toThrow();
                expect(() => getDayNumber(1, '200')).toThrow();
            });
        });

        describe('if passed janFirstDayNumber outside of 0-6 inclusive OR yearDayNumber outside of 0-365 inclusive', () => {
            it('should throw an error', () => {
                expect(() => getDayNumber(7, 200)).toThrow();
                expect(() => getDayNumber(1, 366)).toThrow();
            });
        });

        describe('if passed janFirstDayNumber between 0-6 inclusive AND yearDayNumber between 0-365 inclusive', () => {    
            it('should not throw an error', () => {
                expect(() => getDayNumber(3, 100)).not.toThrow();
            });
            
            it('should return the dayNumber as (janFirstDayNumber + yearDayNumber) % 7', () => {
                expect(getDayNumber(3, 100)).toBe(5);
            });
        });

    });

    // specs for checkHours function
    describe('#checkHours', () => {
        describe('if passed a janFirstDayNumber, yearDayNumber or hourNumber that is not a number', () => {
            it('should throw an error', () => {
                expect(() => checkHours('2', 100, 18)).toThrow();
                expect(() => checkHours(2, '100', 18)).toThrow();
                expect(() => checkHours(2, 100, '18')).toThrow();
            });
        });

        describe('if passed janFirstDayNumber outside of 0-6 inclusive OR yearDayNumber outside of 0-365 inclusive OR hourNumber outside of 0-24 inclusive', () => {
            it('should throw an error', () => {
                expect(() => checkHours(-1, 365, 24)).toThrow();
                expect(() => checkHours(1, 366, 24)).toThrow();
                expect(() => checkHours(1, 365, 25)).toThrow();
            });
        });

        describe('if passed janFirstDayNumber between 0-6 inclusive AND yearDayNumber between 0-365 inclusive AND hourNumber between 0-24 inclusive', () => {
            it('should not throw an error', () => {
                expect(() => checkHours(1, 365, 24)).not.toThrow();
            });

        });

    });

});

