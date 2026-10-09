//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
//
// See COPYRIGHT and LICENSE files for more details.
//++

import { arabicPluralForm } from './init-locale';

describe('arabicPluralForm', () => {
  const expectations:[number, string][] = [
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'few'],
    [10, 'few'],
    [11, 'many'],
    [99, 'many'],
    [100, 'other'],
    [101, 'other'],
    [102, 'other'],
    [103, 'few'],
    [111, 'many'],
    [1000, 'other'],
    [2.5, 'other'],
  ];

  expectations.forEach(([count, form]) => {
    it(`uses "${form}" for ${count}`, () => {
      expect(arabicPluralForm(count)).toBe(form);
    });
  });
});
