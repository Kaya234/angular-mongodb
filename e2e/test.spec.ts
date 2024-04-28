import { Selector } from 'testcafe';

fixture `Test select element`
    .page `http://localhost:4401`;

const brand = Selector('.navbar-brand');

test(`Select an option from the drop-down menu`, async t => {
    await t
        .click(citySelect)
        .click(cityOption.withText('London'))
        .expect(citySelect.value).eql('London');
});
