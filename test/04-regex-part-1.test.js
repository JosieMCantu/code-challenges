import {
    isNum,
    isCapitalized,
    citiesAtoJ,
    matchMonth,
    noPunctuation,
    hangman,
    findShells
} from '../src/04-regex-part-1/04-regex-part-1.js';

const { test, skip } = QUnit;

QUnit.module('04 Regex Part 1');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should return true if the input is a number', assert => {
    assert.ok(isNum(1234567890));
    assert.ok(isNum('12345'));
});

skip('It should return true if the input contains a number', assert => {
    assert.ok(isNum('h3llo w0rld'));
});

skip('It should return false if the input does not contain a number', assert => {
    assert.notOk(isNum('hello world'));
    assert.notOk(isNum(''));
});

skip('It should only return words that begin with a capital letter', assert => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    assert.deepEqual(capitalResult, ['We', 'Return', 'Words', 'With', 'Letter']);

    assert.deepEqual(
        isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).'),
        ['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']
    );

    assert.deepEqual(isCapitalized('these words are all failures'), []);
});

const cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

skip('It should return the cities whose names begin with the letters A through J', assert => {
    assert.deepEqual(citiesAtoJ(cities).sort(), ['Austin', 'Birmingham', 'Boston', 'Cleveland', 'Hoboken']);
    assert.deepEqual(citiesAtoJ([]), []);
    assert.deepEqual(
        citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene']),
        ['Albuquerque', 'Chicago', 'Eugene']
    );
});

skip('It should not return the cities whose names begin with the letters K through Z', assert => {
    const kToZCities = ['San Diego', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Newport Beach'];
    citiesAtoJ(cities).forEach(city => {
        assert.notOk(kToZCities.includes(city));
    });
});

skip('It should match any of the acceptable inputs', assert => {
    assert.ok(matchMonth('Oct'));
    assert.ok(matchMonth('oct'));
    assert.ok(matchMonth('October'));
    assert.ok(matchMonth('october'));
});

skip('It should not match anything other than the acceptable inputs', assert => {
    assert.notOk(matchMonth('November'));
    assert.notOk(matchMonth('nov'));
    assert.notOk(matchMonth(123));
    assert.notOk(matchMonth('octob'));
    assert.notOk(matchMonth('OCTOBER'));
    assert.notOk(matchMonth('notOctober'));
});

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.';

skip('It should only return words that are immediately followed by a space', assert => {
    assert.deepEqual(
        noPunctuation(lorem),
        ['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ']
    );
    assert.deepEqual(
        noPunctuation('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).'),
        ['Given ', 'by ', 'our ', 'hand ', 'in ', 'the ', 'meadow ', 'that ', 'is ', 'called ', 'between ', 'Windsor ', 'and ', 'on ', 'the ', 'fifteenth ', 'day ', 'of ', 'June ', 'in ', 'the ', 'seventeenth ', 'year ', 'of ', 'our ', 'reign ', 'the ', 'new ', 'regnal ', 'year ', 'began ', 'on ', '28 ']
    );
});

skip('It should not contain words that are followed by any non-space character', assert => {
    const badWords = ['amet,', 'elit.', 'egestas.', 'elit,', 'sed.', 'sem,', 'diam.', 'nibh.', 'porttitor.', 'euismod,', 'ultrices.', 'massa,', 'vel,', 'purus.', 'purus,', 'odio.', 'aliquet,', 'non,', 'sem.'];
    noPunctuation(lorem).forEach(word => {
        assert.notOk(badWords.includes(word));
    });
});

const startString = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!';

skip('It should remove the vowels from the hangman string and replace them with underscores', assert => {
    assert.equal(
        hangman(startString), 
        'Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!'
    );
    
    assert.equal(
        hangman('I wAnt them all tO bE removed and replaced with Underscores.'),
        ('_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.')
    );
});

skip('It should not contain the letters "a", "e", "i", "o", or "u"', assert => {
    const result = hangman(startString);
    ['a', 'e', 'i', 'o', 'u'].forEach(vowel => {
        assert.notOk(result.includes(vowel));
    });
});

skip('It should return an array of instances of "sells", shells", and "seashells"', assert => {
    const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';
    const foundShells = findShells(seashells);
    assert.deepEqual(foundShells, ['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
});
