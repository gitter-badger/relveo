/*
 * Relveo is a Spring Boot backend with an embed Angular Frontend made for simplify calculation of everyday energy consumption.
 * Copyright (c) 2018. Andy Costanza <andy.costanza@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>
 */

export class Water{
  id?: number;
  statementDate: Date;
  waterIndex: number;
  _links?: {
    self: {
      href: string
    },
    [s: string]: {
      href: string
    }
  };

}
